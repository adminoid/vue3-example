class Storage {
  tokenKey: string = ''
  storage = window.localStorage
  constructor (prefix: string) {
    this.tokenKey = `${prefix}-token`
  }

  get token (): any {
    return this.storage.getItem(this.tokenKey)
  }

  set token (value: any) {
    this.storage.setItem(this.tokenKey, value)
  }

  exit (): void {
    this.storage.removeItem(this.tokenKey)
  }
}

export default new Storage('ac')
