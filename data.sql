-- NOTE: added a name column to the original so inserting a name column may be necessary

-- Database should be prime_feedback
CREATE DATABASE "prime_feedback";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE,
  "name" text
); 

-- Sample feedback item
INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "name")
VALUES (4, 4, 5, 'Doing Great!', 'Ben'), (2, 4, 5, 'Doing Swell!', 'John'), (4, 2, 5, 'Could be better!', 'Trudy');
