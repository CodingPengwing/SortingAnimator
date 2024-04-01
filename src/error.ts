type CustomErrorType = "EXHAUSTIVE_FAILURE";

const defaultMessage: Record<CustomErrorType, string> = {
  EXHAUSTIVE_FAILURE: "No matches in exhaustive condition.",
};

export class CustomError {
  type: CustomErrorType;
  functionName: string;
  message: string;

  constructor(type: CustomErrorType, functionName: string, message?: string) {
    this.type = type;
    this.functionName = functionName;
    this.message = message || defaultMessage[type];
  }
}
