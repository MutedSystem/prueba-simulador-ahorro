export type RECaptchaVerificationDTO = {
  riskAnalysis: {
    score: number;
    reasons: string[];
    extendedVerdictReasons: string[];
    challenge: string;
  };
  tokenProperties: {
    valid: boolean;
    invalidReason: string;
    action: string;
  };
};