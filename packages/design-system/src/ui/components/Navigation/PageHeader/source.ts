export const headerImportCode = `#### First import component:
~~~tsx
import { PageHeader, Avatar, Button } from '@adopets/react'
`;

export const headerCodeExemple = `~~~tsx
<PageHeader
				title="Adopt information"
				subTitle={<Tooltip
					overlayClassName="whitespace-nowrap"
					rootClassName="max-w-none"
					title="Payment collected by: Carlos Santos">
					<span>Payment collected by: Carlos Santos</span>
				</Tooltip>}
				actions={[{ label: "teste" }]}
				onBack={() => { }}
			/>
`;

export const headerCodeExmeple2 = `#### You can customize component:
~~~tsx
<PageHeader title="Adopt information" onBack={() => { }}>
				<PageHeader.SubTitle className="gap-3" >
					<Tooltip
						overlayClassName="whitespace-nowrap"
						rootClassName="max-w-none"
						title="Payment collected by: Carlos Santos">
						<Flex gap="padding-xs" className='flex-1 overflow-hidden'>
							<div className="truncate">Payment collected by: </div>
							<Avatar size="xSmall" shape="circle" >
								<Avatar.Name className="font-semibold text-sm absolute sm:static sm:visible invisible">Carlos Santos</Avatar.Name>
							</Avatar>
						</Flex>
					</Tooltip>
				</PageHeader.SubTitle>
				<PageHeader.Actions maxActions={2} actions={[{ label: "option 1" }, { label: "option 2" }, { label: "option 2" }]} />
			</PageHeader>
`;
