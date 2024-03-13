import { Module } from '@nestjs/common'
import { SignupResolver } from './signup.resolver'

@Module({
  providers: [SignupResolver]
})
export class SignupModule {}
