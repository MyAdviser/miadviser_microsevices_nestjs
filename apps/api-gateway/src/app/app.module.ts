import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { ConfigModule } from '@nestjs/config'
import { SigninModule } from '@modules/auth/signin/signin.module'
import { SignupModule } from '@modules/auth/signup/signup.module'
import { ClientsModule, Transport } from '@nestjs/microservices'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NATS_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: [`nats://nats`]
        }
      }
    ]),
    ConfigModule.forRoot({
      envFilePath: ['.development.env'],
      isGlobal: true
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // autoSchemaFile: join(process.cwd(), 'apps/api-gateway/src/schema.gql'),
      autoSchemaFile: join(process.cwd(), 'graphs/api-gateway/schema.gql'),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()]
    }),
    SigninModule,
    SignupModule
  ],
  controllers: []
})
export class AppModule {}
