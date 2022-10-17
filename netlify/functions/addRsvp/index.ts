import { Handler } from "@netlify/functions";
import storeRsvp from "./storeRsvp";

const handler: Handler = async function (event, context) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  const requestBody = JSON.parse(event.body) as {
    inviteId: string;
    invitee: string;
    inviteeEmail: string;
  };

  // Store RSVP in Database
  const party = storeRsvp(requestBody.inviteId, requestBody.invitee);

  // TODO - Email confirmation of RSVP to invitee
  // TODO - Email confirmation of RSVP to host

  return {
    statusCode: 200,
    body: JSON.stringify("RSVP stored"),
  };
};

export { handler };
