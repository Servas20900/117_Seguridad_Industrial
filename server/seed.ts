import { PrismaClient } from "@prisma/client"
import { courses } from "./seed-data/courses"
import { occupationalHealthServices } from "./seed-data/HealthService"
import { firstAidKits } from "./seed-data/FirstAidKid"

const prisma = new PrismaClient()

async function main() {
  console.log(' Starting database seed...')

  await prisma.course.deleteMany()
  await prisma.healthService.deleteMany()
  await prisma.firstAidKit.deleteMany()
  await prisma.galleries.deleteMany()

  console.log('  Cleared existing data')

  for (const course of courses) {
    await prisma.course.create({
      data: {
        courseId: course.id,
        title: course.title,
        category: course.category,
        accreditation: course.accreditation,
        duration: course.duration,
        minimum: course.minimum,
        modality: course.modality,
        summary: course.summary,
        topics: course.topics,
        pills: course.pills,
        image: course.image
      }
    })
  }
  console.log(` Seeded ${courses.length} courses`)

  // Seed Health Services
  for (const service of occupationalHealthServices) {
    await prisma.healthService.create({
      data: {
        serviceId: service.id,
        title: service.title,
        category: service.category,
        standards: service.standards,
        modality: service.modality,
        scope: service.scope,
        includes: service.includes,
        benefits: service.benefits,
        pills: service.pills,
        image: service.image
      }
    })
  }
  console.log(` Seeded ${occupationalHealthServices.length} health services`)

  for (const kit of firstAidKits) {
    await prisma.firstAidKit.create({
      data: {
        kitId: kit.id,
        title: kit.title,
        category: kit.category,
        description: kit.description,
        contents: kit.contents as any, 
        benefits: kit.benefits,
        pills: kit.pills,
        images: kit.images
      }
    })
  }
  console.log(` Seeded ${firstAidKits.length} equipment items`)

  console.log(' Galleries seeding skipped (managed from DB/admin).')

  console.log(' Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(' Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
