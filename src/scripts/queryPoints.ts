import { BlastPointsSession } from "../blastQuery";

async function main() {
  const contract = process.argv[2];
  const blast = new BlastPointsSession(contract);
  const points = await blast.queryPoints();
  console.log(points);
}

main();
