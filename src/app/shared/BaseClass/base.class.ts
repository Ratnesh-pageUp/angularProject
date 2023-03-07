export class Base{
  public errorMessage: string = '';
  public isError: boolean = false;
  public isBusy: boolean = false;
  public isSubmitLoading: boolean = false;
  public isAdmin: boolean = false;
  public isCustomer: boolean = false;

  public SetError(errorMsg: string, status: boolean) {
    this.errorMessage = errorMsg;
    this.isError = status;
    this.isBusy = false;
  }

  public SetLoading(status: boolean) {
    this.isBusy = status;
  }

  public setSubmitLoading(status: boolean) {
    this.isSubmitLoading = status;
  }
}
