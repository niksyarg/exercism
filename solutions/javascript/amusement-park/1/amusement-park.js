export function createVisitor(name, age, ticketId) {
  return {
    name: name,
    age: age,
    ticketId: ticketId,
  };
}
export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}
export function ticketStatus(tickets, ticketId) {
 const name = tickets[ticketId];
  if (name === undefined) {
    return 'unknown ticket id';
  }
  if (name === null) {
    return 'not sold';
  }
  return `sold to ${name}`;
}

export function simpleTicketStatus(tickets, ticketId) {
 const status = tickets[ticketId];
  if (status === undefined || status === null) {
    return 'invalid ticket !!!';
  }
  return status;
}
export function gtcVersion(visitor) {
 return visitor.gtc?.version;
}
