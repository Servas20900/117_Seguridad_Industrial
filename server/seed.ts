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

  // Seed First Aid Kits
  for (const kit of firstAidKits) {
    await prisma.firstAidKit.create({
      data: {
        kitId: kit.id,
        title: kit.title,
        category: kit.category,
        description: kit.description,
        contents: kit.contents as any, // JSON field
        benefits: kit.benefits,
        pills: kit.pills,
        images: kit.images
      }
    })
  }
  console.log(` Seeded ${firstAidKits.length} equipment items`)

  // Seed About Galleries
  const galleries = [
    {
      title: 'Maniquíes de RCP',
      category: 'Equipamiento',
      images: [
        'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766964515/MD02_sock0b.png',
        'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766964521/MD05_g3ttig.png',
        'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766964519/MD04_dbp6kx.png',
        'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766964518/MD01_qwhllr.png'
      ]
    },
    {
      title: 'DEA de entrenamiento',
      category: 'Equipamiento',
      images: []
    },
    {
      title: 'Kits y suministros',
      category: 'Equipamiento',
      images: []
    }
  ]

  for (const gallery of galleries) {
    await prisma.galleries.create({
      data: {
        title: gallery.title,
        category: gallery.category,
        images: gallery.images
      }
    })
  }
  console.log(` Seeded ${galleries.length} about galleries`)

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
