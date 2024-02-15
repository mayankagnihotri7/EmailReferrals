import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import referralsApi from "apis/referrals";

import ReferralBox from "./ReferralBox";
import Title from "./Title";

import usersApi from "../apis/users";

function preventDefault(event) {
  event.preventDefault();
}

const Dashboard = () => {
  const [referrals, setReferrals] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchReferralsList();
  }, []);

  const fetchReferralsList = async () => {
    const {
      data: { referrals },
    } = await referralsApi.fetch();
    setReferrals(referrals);
  };

  const createReferrals = async e => {
    preventDefault(e);

    await referralsApi.sendReferralEmail({ referral: { email } });
    window.location.reload();
  };

  const handleLogout = async () => {
    try {
      await usersApi.logout();

      localStorage.removeItem("isSignedIn");
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container component="main">
      <Box
        sx={{ display: "flex", justifyContent: "space-between" }}
        onClick={handleLogout}
      >
        <ReferralBox createReferrals={createReferrals} setReferral={setEmail} />
        <Button>Log out</Button>
      </Box>
      <Title>Referred Emails</Title>
      {referrals ? (
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {referrals.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>
                  <a href={`mailto:${row}`} target="_top">
                    {row}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p>
          You have not referred any emails. Get started by entering it above.
        </p>
      )}
    </Container>
  );
};

export default Dashboard;
