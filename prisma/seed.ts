import { PrismaClient  } from "@prisma/client";
const prisma = new PrismaClient()

const firstHabitId = '0730ffac-d039-4194-9571-01aa2aa0efbd'

async function run() {
    // await prisma.habit.deleteMany()
    // await prisma.Day.deleteMany()


    await Promise.all([
        prisma.habit.create({
            data: {
                title: 'Beber agua',
                created_at: new Date('2023-03-10T00:00:00.000z'),
                weekDays: {
                    create:[
                        {week_day: 1},
                        {week_day: 2},
                        {week_day: 3}
                    ],
                },
            },
        })

//         prisma.habit.create({
//             data: {
//                 title: 'Ir a academia',
//                 created_at: new Date('2023-03-10T00:00:00.000z'),
//                 weekDays: {
//                     create:[
//                         {week_day: 1},
//                         {week_day: 2},
//                         {week_day: 3}
//                     ]
//                 }
//             }
//         })
    ])

    //  await Promise.all([
    //     prisma.day.create({
    //         data: {
    //             data: new Date('2023-03-10T00:00:00.000z'),
    //             dayHabits: {
    //                 create: {
    //                     habit_id: firstHabitId
    //                 }
    //             },
    //         },
    //     }),
    //  ])
 }

run()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })