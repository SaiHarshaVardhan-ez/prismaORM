const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  create
  await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
      posts: {
        create: { title: 'Hello World' },
      },
      profile: {
        create: { bio: 'I like turtles' },
      },
    },
  })
  // const post=await prisma.post.create({
  //   data: {
  //     title: 'New Post',
  //     content: 'This is a new post.',
  //     published: false,
  //     author: {
  //       connect: { id: 1 }, // Assuming author with id 1 exists
  //     },
  //   },
  // });
  // console.log(post)
  // const profile=await prisma.profile.create({
  //   data: {
  //     bio: 'Bio of the user',
  //     user: {
  //       connect: { id: 1 }, // Assuming user with id 1 exists
  //     },
  //   },
  // });console.log(profile)
  //Read
  //   const allUsers = await prisma.user.findMany({
  //     include: {
  //       posts: true,
  //       profile: true,
  //     },
  //   })
  //   console.dir(allUsers, { depth: null })
  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //     profile: true,
  //   },
  // });
  // console.dir(allUsers, { depth: null });
  // const user = await prisma.user.findUnique({
  //   where: { email: 'alice@prisma.io' },
  //   include: {
  //     posts: true,
  //     profile: true,
  //   },
  // });
  // console.log(user);
  // const allPosts = await prisma.post.findMany();
  // console.dir(allPosts, { depth: null });
  // update
  // const updatedUser = await prisma.user.update({
  //   where: { email: 'alice@prisma.io' },
  //   data: { name: 'Alice Updated' },
  // });
  // console.log(updatedUser);
  //   const post = await prisma.post.update({
  //     where: { id: 1 },
  //     data: { published: true },
  //   })
  //   console.log(post)

  // const deletedUser = await prisma.user.delete({
  //   where: { email: 'alice@prisma.io' },
  // });
  // console.log(deletedUser);

  
  // const deletedPost = await prisma.post.delete({
  //   where: { id: 1 },
  // });
  // console.log(deletedPost);
  
  
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
