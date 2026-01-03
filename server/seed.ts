import { PrismaClient } from "@prisma/client"
import { courses } from "./seed-data/courses"
import { occupationalHealthServices } from "./seed-data/HealthService"
import { firstAidKits } from "./seed-data/FirstAidKid"
import { testCourses, testHealthServices, testFirstAidKits, testGalleries } from "./seed-data/test-data"

const prisma = new PrismaClient()
const isTestEnvironment = process.env.NODE_ENV === 'test'

async function main() {
  const environment = isTestEnvironment ? 'TEST' : 'PRODUCTION'
  console.log(`🌱 Starting database seed (${environment} environment)...`)

  // Clear existing data
  await prisma.course.deleteMany()
  await prisma.healthService.deleteMany()
  await prisma.firstAidKit.deleteMany()
  await prisma.galleries.deleteMany()

  console.log('  ✓ Cleared existing data')

  // Select data based on environment
  const coursesToSeed = isTestEnvironment ? testCourses : courses
  const healthServices = isTestEnvironment ? testHealthServices : occupationalHealthServices
  const kits = isTestEnvironment ? testFirstAidKits : firstAidKits
  const galleries = isTestEnvironment ? testGalleries : []

  // Seed Courses
  for (const course of coursesToSeed) {
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
  console.log(`  ✓ Seeded ${coursesToSeed.length} courses`)

  // Seed Health Services
  for (const service of healthServices) {
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
  console.log(`  ✓ Seeded ${healthServices.length} health services`)

  // Seed First Aid Kits / Equipment
  for (const kit of kits) {
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
  console.log(`  ✓ Seeded ${kits.length} equipment items`)

  // Seed Galleries (only for test)
  for (const gallery of galleries) {
    await prisma.galleries.create({
      data: {
        title: gallery.title,
        category: gallery.category,
        images: gallery.images
      }
    })
  }
  if (galleries.length > 0) {
    console.log(`  ✓ Seeded ${galleries.length} galleries`)
  } else {
    console.log(`  ℹ Galleries seeding skipped (managed from DB/admin).`)
  }

  console.log(`✨ Database seeded successfully! (${environment})`)
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
