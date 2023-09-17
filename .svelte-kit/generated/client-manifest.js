export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8')];

export const server_loads = [];

export const dictionary = {
	"": [4],
	"(dashboard)/clients": [5,[2]],
	"(dashboard)/invoices": [6,[2]],
	"(dashboard)/invoices/thanks": [8],
	"(dashboard)/invoices/[id]": [7,[3]]
};