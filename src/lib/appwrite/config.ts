import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECTID,
  appWriteUrl: import.meta.env.VITE_APPWRITE_URL,
  usersId: import.meta.env.VITE_APPWRITE_ATTRIBUTE_USERS_ID,
  postsId: import.meta.env.VITE_APPWRITE_ATTRIBUTE_POSTS_ID,
  saveId: import.meta.env.VITE_APPWRITE_ATTRIBUTE_SAVE_ID,
};

export const client = new Client();
client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.appWriteUrl);

export const account = new Account(client);
export const dataBases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
