import { getPayload } from "payload";
import config from "../payload.config";

type SeedItem = {
  order: number;
  department: "architects" | "builds";
  title: string;
  text: string;
  icon: string;
  category: "living" | "commercial";
  type: "design" | "implementation";
};

const items: SeedItem[] = [
  {
    order: 1,
    department: "builds",
    title: "Ремонт квартир",
    text: "Ремонт квартир під ключ власною командою — від чорнових робіт до фінального оздоблення. Фіксована ціна в договорі.",
    icon: "flaticon-mansory",
    category: "living",
    type: "implementation",
  },
  {
    order: 2,
    department: "builds",
    title: "Ремонт будинків",
    text: "Ремонт будинків, котеджів і таунхаусів у Києві та області. Авторський нагляд і прозора звітність на кожному етапі.",
    icon: "flaticon-modern-house",
    category: "living",
    type: "implementation",
  },
  {
    order: 3,
    department: "builds",
    title: "Ремонт комерції",
    text: "Ремонт офісів, ресторанів, клінік і магазинів під ключ. Мінімізуємо простій бізнесу, дотримуємось термінів.",
    icon: "flaticon-skyscraper",
    category: "commercial",
    type: "implementation",
  },
  {
    order: 1,
    department: "architects",
    title: "Дизайн інтер'єру",
    text: "Унікальний дизайн-проєкт вашої квартири чи будинку — практичний і продуманий до дрібниць.",
    icon: "flaticon-interior-design",
    category: "living",
    type: "design",
  },
  {
    order: 2,
    department: "architects",
    title: "Дизайн комерції",
    text: "Дизайн офісів, ресторанів, клінік і магазинів. 3D-візуалізації та повна технічна документація.",
    icon: "flaticon-real-estate",
    category: "commercial",
    type: "design",
  },
];

async function run() {
  const payload = await getPayload({ config });

  for (const item of items) {
    const existing = await payload.find({
      collection: "what-we-do-items",
      where: { title: { equals: item.title }, department: { equals: item.department } },
      limit: 1,
    });

    if (existing.docs[0]) {
      console.log(`Skipping (already exists): ${item.title}`);
      continue;
    }

    await payload.create({
      collection: "what-we-do-items",
      data: item,
    });

    console.log(`Created: ${item.title}`);
  }

  console.log("Done.");
}

run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
