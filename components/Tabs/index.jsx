import Image from "next/image";
import React, { useMemo } from "react";
import Button from "../Button";
import { ArrowLeft } from "../Icons";
import {
	ActionWrapper,
	ChildWrapper,
	ContentWrapper,
	SideBarWrapper,
	TabBodyHeading,
	TabBodyPara,
	TabBodyWrapper,
	TabHeaderItem,
	TabHeaderItemWrapper,
	TabItemWrapper,
	TabsWrapper,
} from "./styles";

const TabItem = ({ title, description, image }) => (
	<TabItemWrapper>
		<ContentWrapper>
			<TabBodyHeading>{title}</TabBodyHeading>
			<TabBodyPara>{description}</TabBodyPara>
			<ActionWrapper>
				<Button className="">Contact Us</Button>
				<Button className="ml-4" variant="outlined">
					Learn More
				</Button>
			</ActionWrapper>
		</ContentWrapper>
		<div className="image-outer">
			<Image
				src={image ? image : "/images/finance.svg"}
				alt="finance"
				width={390}
				height={390}
			/>
		</div>
	</TabItemWrapper>
);

const tabItems = [
	{
		id: 1,
		title: "More Customer",
		body: (
			<TabItem
				title="What we will do?"
				description="
    Invisible ai is a pltaform to early invest in Ai. Invest in your
    favourite category. Invisible ai is a pltaform to early invest in Ai.
    Invest in your favourite category."
			/>
		),
	},
	{
		id: 2,
		title: "Less Operating",
		body: (
			<TabItem
				title="Less Operating"
				description="
    Invisible ai is a pltaform to early invest in Ai. Invest in your
    favourite category. Invisible ai is a pltaform to early invest in Ai.
    Invest in your favourite category."
			/>
		),
	},
	{
		id: 3,
		title: "Further Sources",
		body: (
			<TabItem
				title="Further Sources"
				description="
    Invisible ai is a pltaform to early invest in Ai. Invest in your
    favourite category. Invisible ai is a pltaform to early invest in Ai.
    Invest in your favourite category."
			/>
		),
		children: [
			{
				id: 4,
				title: "Delivery",
				body: (
					<TabItem
						title="Delivery"
						description="
    Invisible ai is a pltaform to early invest in Ai. Invest in your
    favourite category. Invisible ai is a pltaform to early invest in Ai.
    Invest in your favourite category."
					/>
				),
			},
			{
				id: 5,
				title: "Branch Extension",
				body: (
					<TabItem
						title="Branch Extension"
						description="
    Invisible ai is a pltaform to early invest in Ai. Invest in your
    favourite category. Invisible ai is a pltaform to early invest in Ai.
    Invest in your favourite category."
					/>
				),
			},
		],
	},
];

const Tabs = ({ active, handleActiveTab }) => {
	const tabBody = useMemo(() => {
		let tab = "";
		tabItems.forEach((i) => {
			if (i.id === active) {
				tab = i.body;
				return i;
			} else if (i.children) {
				i.children.forEach((sub) => {
					if (sub.id === active) {
						tab = sub.body;
						return sub;
					}
				});
			} else {
				return i;
			}
		});
		return tab;
	}, [active]);
	return (
		<TabsWrapper>
			<SideBarWrapper>
				{tabItems.map((item) => (
					<TabHeaderItemWrapper key={item.id} style={{ color: "#a8a8a8" }}>
						<TabHeaderItem
							active={item.id === active}
							onClick={() => handleActiveTab(item.id)}
						>
							<span>{item.title}</span>
							<ArrowLeft fill={item.id !== active && "#a8a8a8"} />
						</TabHeaderItem>
						<ChildWrapper>
							{item?.children?.map((inner) => (
								<TabHeaderItem
									key={inner.id}
									active={inner.id === active}
									child
									onClick={() => handleActiveTab(inner.id)}
								>
									<span className="mr-2">{inner.title}</span>
									<ArrowLeft
										fill={inner.id !== active && "#a8a8a8"}
										width="6"
										height="10"
									/>
								</TabHeaderItem>
							))}
						</ChildWrapper>
					</TabHeaderItemWrapper>
				))}
			</SideBarWrapper>
			<TabBodyWrapper>{tabBody}</TabBodyWrapper>
		</TabsWrapper>
	);
};

export default Tabs;
