import { PrismaClient  } from "@prisma/client";
const prisma = new PrismaClient()

const firstHabitId = '10da9261-77fc-454a-89e2-a34d4633dac3'

async function run() {
    await prisma.habit.deleteMany()
    await prisma.day.deleteMany()
    await prisma.habitsWeekDays.deleteMany()
    await prisma.dayHabit.deleteMany()

    await Promise.all([
        prisma.habit.create({
            data: {
                id: firstHabitId,
                title: 'Beber agua',
                created_at: new Date('2023-03-10T00:00:00.000z'),
                weekDays: {
                    create:[
                        {week_day: 1},
                        {week_day: 2},
                        {week_day: 3}
                    ],
                },
            }
        })
    ]);

    await Promise.all([
        /**
         * Habits (Complete/Available): 1/1
         */
        prisma.day.create({
          data: {
            /** Monday */
            date: new Date("2023-01-02T03:00:00.000z"),
            dayHabits: {
              create: {
                habit_id: firstHabitId,
              },
            },
          },
        }),
    
        /**
         * Habits (Complete/Available): 1/1
         */
        prisma.day.create({
          data: {
            /** Friday */
            date: new Date("2023-01-06T03:00:00.000z"),
            dayHabits: {
              create: {
                habit_id: firstHabitId,
              },
            },
          },
        }),
      ]);
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