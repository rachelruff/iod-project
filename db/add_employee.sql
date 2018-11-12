INSERT INTO "public"."Employees"("FirstName", "LastName", "Email", "Salary") VALUES($1, $2, $3, $4) RETURNING "Id", "FirstName", "LastName", "Email", "Salary";
