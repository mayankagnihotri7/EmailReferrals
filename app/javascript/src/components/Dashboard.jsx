import React, { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import referralsApi from "apis/referrals";

import ReferralBox from "./ReferralBox";
import Title from "./Title";

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

  return (
    <Container component="main">
      <ReferralBox createReferrals={createReferrals} setReferral={setEmail} />
      <Title>Referred Emails</Title>
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
    </Container>
  );
};

export default Dashboard;
