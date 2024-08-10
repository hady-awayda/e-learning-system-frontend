export type WithdrawalProp = {
  id: string;
  user_id: string;
  course_id: string;
  reason: string;
  status: "Pending" | "Approved" | "Rejected";
  created_at: string;
};

export type WithdrawalProps = WithdrawalProp[];

export type WithdrawalsState = { withdrawals: WithdrawalProp[] };
