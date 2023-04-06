import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
	lang: 'en-US',
	title: 'Appa Wiki',
	description: 'Wiki for management and use of Downing Lab Appa Server',
	head: [['link', { rel: 'icon', href: '/appa.webp' }]],
	theme: defaultTheme({
    	// default theme config
		navbar: [
			{ text: 'Home', link: '/' }
		],
		sidebar: [
			{
				text: 'Home',
				link: '/',
			},
			{
				text: 'Data Management',
				link: '/data_management/',
			},
			{
				text: 'Environment Modules',
				link: '/environment_modules/',
			},
			{
				text: 'Slurm',
				link: '/slurm/',
			},
			{
				text: 'RStudio Server',
				link: '/rstudio_server/',
			},
			{
				text: 'Website Management',
				link: '/website_management/',
				collapsible: true,
				children: ['/website_management/node.js.md', '/website_management/nginx.md', '/website_management/build.md']
			},
			{
				text: 'Backend Management',
				link: '/backend_management/',
			},
		]
    })
})
