import axios from "axios";

const fetch = () => axios.get("/referrals");

const sendReferralEmail = payload =>
  axios.post("/referrals/send_email", payload);

const referralsApi = { fetch, sendReferralEmail };

export default referralsApi;
