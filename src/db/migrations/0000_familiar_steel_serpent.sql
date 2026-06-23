CREATE TABLE "projects" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "projects_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"slug" varchar(255) NOT NULL,
	"title" jsonb NOT NULL,
	"description" jsonb NOT NULL,
	"date" varchar(255) NOT NULL,
	"tags" varchar(255)[] NOT NULL,
	"githubUrl" varchar(255),
	"classroomUrl" varchar(255)
);
