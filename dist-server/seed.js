"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const courses_1 = require("./seed-data/courses");
const HealthService_1 = require("./seed-data/HealthService");
const FirstAidKid_1 = require("./seed-data/FirstAidKid");
const prisma = new client_1.PrismaClient();
async function main() {
    console.log(' Starting database seed...');
    await prisma.course.deleteMany();
    await prisma.healthService.deleteMany();
    await prisma.firstAidKit.deleteMany();
    await prisma.galleries.deleteMany();
    console.log('  Cleared existing data');
    for (const course of courses_1.courses) {
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
        });
    }
    console.log(` Seeded ${courses_1.courses.length} courses`);
    // Seed Health Services
    for (const service of HealthService_1.occupationalHealthServices) {
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
        });
    }
    console.log(` Seeded ${HealthService_1.occupationalHealthServices.length} health services`);
    for (const kit of FirstAidKid_1.firstAidKits) {
        await prisma.firstAidKit.create({
            data: {
                kitId: kit.id,
                title: kit.title,
                category: kit.category,
                description: kit.description,
                contents: kit.contents,
                benefits: kit.benefits,
                pills: kit.pills,
                images: kit.images
            }
        });
    }
    console.log(` Seeded ${FirstAidKid_1.firstAidKits.length} equipment items`);
    console.log(' Galleries seeding skipped (managed from DB/admin).');
    console.log(' Database seeded successfully!');
}
main()
    .catch((e) => {
    console.error(' Error seeding database:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
