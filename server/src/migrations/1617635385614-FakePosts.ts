import {MigrationInterface, QueryRunner} from "typeorm";

export class FakePosts1617635385614 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into post (title, text, "creatorId") values ('Cost Accountant', 'wmMcsxmBkYG', 2);
            insert into post (title, text, "creatorId") values ('Operator', 'baR1vHz27C4', 2);
            insert into post (title, text, "creatorId") values ('Occupational Therapist', 'li5sojMC', 2);
            insert into post (title, text, "creatorId") values ('Senior Sales Associate', 'XrNudh', 2);
            insert into post (title, text, "creatorId") values ('Geologist IV', 'aEpqZyHjl', 2);
            insert into post (title, text, "creatorId") values ('Environmental Tech', 'ozifHgB2jY', 2);
            insert into post (title, text, "creatorId") values ('Database Administrator I', 'pIGVWIQvN', 2);
            insert into post (title, text, "creatorId") values ('Structural Engineer', 'PI6mGl1wEv0b', 2);
            insert into post (title, text, "creatorId") values ('Food Chemist', 'DOMm8I3Z8', 2);
            insert into post (title, text, "creatorId") values ('Account Coordinator', 'WmtK5t', 2);
            insert into post (title, text, "creatorId") values ('Assistant Manager', 'CAgQHDGYI', 2);
            insert into post (title, text, "creatorId") values ('Executive Secretary', 'r0MNT5qUtS', 2);
            insert into post (title, text, "creatorId") values ('Editor', 'srLaYlcCI', 2);
            insert into post (title, text, "creatorId") values ('Payment Adjustment Coordinator', '80j90OY', 2);
            insert into post (title, text, "creatorId") values ('Senior Financial Analyst', 'p1uc9UMzp', 2);
            insert into post (title, text, "creatorId") values ('Geologist II', 'bmvTdwjZpqwH', 2);
            insert into post (title, text, "creatorId") values ('Research Assistant I', '4wQvNf', 2);
            insert into post (title, text, "creatorId") values ('Quality Control Specialist', 'x6LZcr5', 2);
            insert into post (title, text, "creatorId") values ('Librarian', 'iABdUo', 2);
            insert into post (title, text, "creatorId") values ('Developer IV', 'r0BCqeoHIn', 2);
            insert into post (title, text, "creatorId") values ('Tax Accountant', '8gDfn6ZfzvwI', 2);
            insert into post (title, text, "creatorId") values ('Account Representative II', '8LzCymk8', 2);
            insert into post (title, text, "creatorId") values ('Quality Engineer', 'lz4cdimh1N', 2);
            insert into post (title, text, "creatorId") values ('Compensation Analyst', 'sqmMkJwhV', 2);
            insert into post (title, text, "creatorId") values ('Occupational Therapist', 'wAj5jZMm', 2);
            insert into post (title, text, "creatorId") values ('Design Engineer', 'TzVw10lDU', 2);
            insert into post (title, text, "creatorId") values ('Senior Editor', 'jGNnjmYMeApU', 2);
            insert into post (title, text, "creatorId") values ('Actuary', '8lWikW5ApU', 2);
            insert into post (title, text, "creatorId") values ('Office Assistant IV', 'jF4tFgXAg8gK', 2);
            insert into post (title, text, "creatorId") values ('Office Assistant I', 'oswfIQ', 2);
            insert into post (title, text, "creatorId") values ('Senior Financial Analyst', 'BTEp3QJ', 2);
            insert into post (title, text, "creatorId") values ('Occupational Therapist', '67UudbrPDF', 2);
            insert into post (title, text, "creatorId") values ('VP Accounting', '9tTQv42', 2);
            insert into post (title, text, "creatorId") values ('Graphic Designer', 'novQqs', 2);
            insert into post (title, text, "creatorId") values ('Senior Cost Accountant', 'PhkurQ94mr', 2);
            insert into post (title, text, "creatorId") values ('Administrative Officer', 'RBqScI', 2);
            insert into post (title, text, "creatorId") values ('Teacher', 'Qs3eXs9XYH6', 2);
            insert into post (title, text, "creatorId") values ('Safety Technician III', 'Meh6IOdLpzt', 2);
            insert into post (title, text, "creatorId") values ('Cost Accountant', '7dZwYRoKfy', 2);
            insert into post (title, text, "creatorId") values ('Mechanical Systems Engineer', '0c68BWo6Q', 2);
            insert into post (title, text, "creatorId") values ('Actuary', 'RHDIzJ', 2);
            insert into post (title, text, "creatorId") values ('Actuary', 'jjQlV4WfHvt', 2);
            insert into post (title, text, "creatorId") values ('Assistant Professor', 'r3DoFcEm2WhI', 2);
            insert into post (title, text, "creatorId") values ('Assistant Manager', 'tsX98E0', 2);
            insert into post (title, text, "creatorId") values ('Actuary', 'wau7ctK', 2);
            insert into post (title, text, "creatorId") values ('Chief Design Engineer', 'LCbbjEjVm', 2);
            insert into post (title, text, "creatorId") values ('Environmental Tech', 'gOkoVYl', 2);
            insert into post (title, text, "creatorId") values ('Software Test Engineer I', '9z3sXM6', 2);
            insert into post (title, text, "creatorId") values ('VP Accounting', '7T0N30QMO', 2);
            insert into post (title, text, "creatorId") values ('Programmer II', 'dqD6nT', 2);
            insert into post (title, text, "creatorId") values ('Senior Financial Analyst', 'Ycv3e3KaP2s', 2);
            insert into post (title, text, "creatorId") values ('Compensation Analyst', 'Cfm8vY4S02Gd', 2);
            insert into post (title, text, "creatorId") values ('Pharmacist', 'HoQo4q', 2);
            insert into post (title, text, "creatorId") values ('Web Designer II', 'EHyn4Xs', 2);
            insert into post (title, text, "creatorId") values ('Nurse Practicioner', 'p3uivb', 2);
            insert into post (title, text, "creatorId") values ('Analyst Programmer', 'WO0OkE9dfPSA', 2);
            insert into post (title, text, "creatorId") values ('Marketing Manager', 'OSXGDdRiW', 2);
            insert into post (title, text, "creatorId") values ('Account Executive', 'sc4hGbCcr9Rf', 2);
            insert into post (title, text, "creatorId") values ('Associate Professor', '5QcyCi5XXmAK', 2);
            insert into post (title, text, "creatorId") values ('Database Administrator III', 'GZQ9RsSJ', 2);
        `)
    }

    public async down(_: QueryRunner): Promise<void> {
    }

}
