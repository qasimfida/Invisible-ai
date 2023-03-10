import Head from "next/head";
import styled from "styled-components";
import Container from "../components/Layout/container";
import Writter from "../components/writer";
import HomeContainer from "../containers/HomeContainer";

const Main = styled.main``;

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<HomeContainer />
		</>
	);
}
