// gps-shortcut-v3: the GPS swears the marathon course was a shortcut.
// Beat 1: the map routes us onto the marathon course.
// Beat 2: the runners mistake the car for the pace car.
// Beat 3: 40,000 spectators chant the license plate.
// Kicker: the crowd cheers the car, not the runners.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The map routed us onto the marathon course. The runners think I am the pace car, and 40,000 spectators are chanting our license plate.";

if ([...LINE].length < 1 || [...LINE].length > 200) {
  throw new Error("entry must be 1-200 characters");
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
