import { PrismaClient } from "@prisma/client"
import config from "./config"

const client = new PrismaClient({
  datasources: {
    db: config.database
  }
})

export interface Context {
  client: PrismaClient
}

export function createContext(): Context {
  return { client }
}
