import { INewUser } from "@/types";
import { ID } from "appwrite";
import { account, appwriteConfig, avatars, dataBases } from "./config";

export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.userName
    );

    if (!newAccount) throw Error;

    const pictureUrl = avatars.getInitials(user.userName);
    const newUser = await saveUserToDB({
      accountId: newAccount.$id,
      userName: newAccount.name,
      pictureUrl: pictureUrl,
      email: newAccount.email,
    });

    return newUser;
  } catch (error) {
    console.log(error);
  }
}
export async function saveUserToDB(user: {
  accountId: string;
  pictureUrl: URL;
  userName: string;
  email: string;
}) {
  try {
    const newUser = await dataBases.createDocument(
      appwriteConfig.appWriteDatabaseId,
      appwriteConfig.userColectionId,
      ID.unique(),
      user
    );
    return newUser;
  } catch (error) {
    console.log(error);
  }
}
