import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
// import { classMap } from 'lit/directives/class-map.js';
import { defaultBackground, defaultMode, defaultTheme } from '../../options.js';

@customElement('discord-messages')
export class DiscordMessages extends LitElement {
	static override styles = css`
		@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');

		/* New Whitney fonts to match rebranding */
		@font-face {
			font-family: 'Whitney';
			src: url('https://cdn.skyra.pw/whitney-font/v2/Book.woff') format('woff');
			font-weight: 400;
		}

		@font-face {
			font-family: 'Whitney';
			src: url('https://cdn.skyra.pw/whitney-font/v2/Medium.woff') format('woff');
			font-weight: 500;
		}

		@font-face {
			font-family: 'Whitney';
			src: url('https://cdn.skyra.pw/whitney-font/v2/Semibold.woff') format('woff');
			font-weight: 600;
		}

		@font-face {
			font-family: 'Whitney';
			src: url('https://cdn.skyra.pw/whitney-font/v2/Bold.woff') format('woff');
			font-weight: 700;
		}

		:host {
			color: #fff;
			background-color: #36393e;
			display: block;
			font-size: 16px;
			font-family: Whitney, Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
			line-height: 170%;
			border: 1px solid rgba(255, 255, 255, 0.05);
		}

		.light-theme {
			color: #747f8d;
			background-color: #fff;
			border-color: #dedede;
		}

		.no-background {
			background-color: unset;
		}
	`;

	/**
	 * Whether to use light theme or not.
	 */
	@property({ type: Boolean, reflect: true })
	public lightTheme = false;

	/**
	 * Whether to exclude the background or not.
	 */
	@property({ type: Boolean, reflect: true })
	public noBackground = false;

	/**
	 * Whether to use compact mode or not.
	 */
	@property({ type: Boolean, reflect: true, attribute: 'compact-mode' })
	public compactMode = false;

	public override connectedCallback(): void {
		if (this.lightTheme || (defaultTheme === 'light' && this.lightTheme)) {
			this.lightTheme = true;
		}

		if (this.compactMode || (defaultMode === 'compact' && this.compactMode)) {
			this.compactMode = true;
		}

		if (this.noBackground || (defaultBackground === 'none' && this.noBackground)) {
			this.noBackground = true;
		}
	}

	protected override render() {
		return html`<div>
			<div>test</div>
			<slot></slot>
		</div>`;
	}
}