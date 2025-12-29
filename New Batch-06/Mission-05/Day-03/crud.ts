import { prisma } from "./lib/prisma";

async function run() {
    const createUser = await prisma.user.create({
        data:
        {
            name: "Rahul Rudddrad110",
            email: "rahul11dd0@gmail.com"
        }
    })

    console.log("Created User", createUser)
    const createPost = await prisma.post.create({
        data: {
            title: "This isTj1iddlr",
            content: "This is 1jCddfontet",
            authorId: 6
        }
    })

    console.log("Created User", createPost)



    const users = await prisma.user.findMany()

    const usersPosts = await prisma.post.findMany()
    console.log("Find", usersPosts)

    const updateUser = await prisma.profile.update({
        where: {}
    })
}
run()