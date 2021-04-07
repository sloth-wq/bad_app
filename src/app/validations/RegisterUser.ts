import { IsEmail, IsString } from 'class-validator'

export class RegisterUser {
  @IsString()
  name: string

  @IsEmail()
  email: string

  @IsString()
  password: string

  constructor(name: string, email: string, password: string) {
    this.name = name
    this.email = email
    this.password = password
  }
}
