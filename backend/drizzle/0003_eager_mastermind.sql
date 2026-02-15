ALTER TABLE "restaurants" ADD COLUMN "cnpj" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "phone" text;--> statement-breakpoint
ALTER TABLE "restaurants" ADD CONSTRAINT "restaurants_cnpj_unique" UNIQUE("cnpj");