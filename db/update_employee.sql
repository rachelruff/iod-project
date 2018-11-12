UPDATE "public"."Employees" SET "FirstName"=$2, "LastName"=$3, "Email"=$4, "Salary"=$5  WHERE "Id"=$1 RETURNING "Id", "FirstName", "LastName", "Email", "Salary";
