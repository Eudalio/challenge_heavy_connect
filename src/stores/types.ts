export type STATUS = 'Good' | 'Need Repair' | 'Broken';

export type InspectionType = {
	id: string;
	status: STATUS;
	date: Date;
	details: string;
};

export type TractorType = {
	fieldKey: number;
	name: string;
	id: string;
	horsePower: number;
	brand: string;
	purchaseDate: Date;
	inspections: InspectionType[];
	status: STATUS;
};
