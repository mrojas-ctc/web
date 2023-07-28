// Axios
import axios from "axios";

// Helpers
import { getAccessCookie } from "../helpers/cookies.helpers";

const instanceBaseURL = process.env.REACT_APP_CTC_BACKEND_URL;

export const setGenericPassword = async (
    sessionId: number
 ) => {
    try {
       const response = await axios.patch(
          `${instanceBaseURL}/account/set-generic-password/${sessionId}/`,
          {
             headers: { Authorization: `Bearer ${getAccessCookie()}` },
          }
       );
       return response;
    } catch (e) {
       //handleInvalidToken({ redirect: '/' });
    }
 };