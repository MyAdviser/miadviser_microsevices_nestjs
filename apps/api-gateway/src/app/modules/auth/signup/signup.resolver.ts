import { Resolver, Query } from '@nestjs/graphql'

@Resolver()
export class SignupResolver {
  @Query(() => String)
  helloworld(): string {
    return 'Hola resolver signup'
  }
}
