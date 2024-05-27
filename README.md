Project Starter Next.js + Prisma (SQLite by default, use any other db easily)

# Quick Start

### Create a new Next-Breeze App

Crate a new Next-Breeze app using the `create-next-breeze` cli, make sure you replace <YOUR_APP_NAME> with the name of your app.

```shellscript
npx create-next-breeze@latest <YOUR_APP_NAME>
```

By running the `create-next-breeze@latest` cli the following will happen automatically:

- Initializes a new Next-Breeze app
- Installs the dependencies
- Creates a `.env` file with the initial variables
- Initializes an empty git repository
- Setups prisma with a dev SQLite database
- Seed the database

**Note**: You can use prisma studio to interact with your database by running `npx prisma studio` and navigate to the link displayed in your terminal.

### Run your development server

Change directory into your newly created app and run the dev server

```shellscript
cd <YOUR_APP_NAME>
npm run dev
```

### Signin to your app

To be able to signin, you'll need to get a `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` in the [Google developer console](https://docs.full-stack-kit.dev/authentication/google) and paste the values in the `.env` file, once completed you'll be able to authenticate using Google in your app.

Follow this [documentation](https://docs.full-stack-kit.dev/authentication/google) on how to get your `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`

## Using the CLI

Next-Breeze come with a handy CLI that allows you to quickly scaffold CRUD ressources.

### Let's Quickly Scaffold a Blog

To try out the Remix-Breeze CLI, let's create a blog.

With a single `next-breeze scaffold-crud` command, you can scaffold a fully featured blog where you can create, read, update and delete posts, including Backend and Frontend code.

Run this command in your CLI

```shellscript
npx next-breeze scaffold-crud -r posts -m "title:string content:text isPublished:boolean"
```

**Note**: For the first time it might prompt you to install the CLI. Type "y" to accept.

After the command executed successfully, you'll get an overview of all the files that were created in the project and the model `Post` will be added to the `prisma/schema.prisma` file.

### Regenerate the Prisma client

Run the following commands to regenerate the prisma client and automatically create the `Post` table in the database:

```shellscript
npx prisma db push
npx prima generate
```

### Test your blog

Stop and restart the development server. and navigate to the `/posts` route and see the magic happen.

You can create, view, edit and delete posts.

You can find the pages code in the `app/posts` directory, where you can style your blog as you wish and ship your blog.

What's Next ?

- [Check out our Premium Next.js Full-Stack kit](https://full-stack-kit.dev)
- [Join our Discord community](https://discord.gg/W7774VAbSM)
- [Follow the creator on Twitter](https://x.com/Paterson1720)
