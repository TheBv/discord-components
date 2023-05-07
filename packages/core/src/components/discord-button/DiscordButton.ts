import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import LaunchIcon from '../svgs/LaunchIcon.js';

interface DiscordButtonProps {
	emoji?: string;
	emojiName?: string;
	url?: string;
	disabled?: boolean;
	type?: 'primary' | 'secondary' | 'success' | 'destructive';
}

@customElement('discord-button')
export class DiscordButton extends LitElement implements DiscordButtonProps {
	// TODO: Why isn't host: working?
	public static override styles = css`
		.discord-button {
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			margin: 4px 8px 4px 0;
			padding: 2px 16px;
			width: auto;
			height: 32px;
			min-width: 60px;
			min-height: 32px;
			-webkit-transition: background-color 0.17s ease, color 0.17s ease;
			transition: background-color 0.17s ease, color 0.17s ease;
			border-radius: 3px;
			font-size: 14px;
			font-weight: 500;
			line-height: 16px;
			text-decoration: none !important;
		}

		.discord-button-success {
			color: #fff;
			background-color: #3ba55d;
		}

		.discord-button-success.discord-button-hoverable:hover {
			background-color: #2d7d46;
		}

		.discord-button-destructive {
			color: #fff;
			background-color: #ed4245;
		}

		.discord-button-destructive.discord-button-hoverable:hover {
			background-color: #c03537;
		}

		.discord-button-primary {
			color: #fff;
			background-color: #5865f2;
		}

		.discord-button-primary.discord-button-hoverable:hover {
			background-color: #4752c4;
		}

		.discord-button-secondary {
			color: #fff;
			background-color: #4f545c;
		}

		.discord-button-secondary.discord-button-hoverable:hover {
			background-color: #5d6269;
		}

		.discord-button-disabled {
			cursor: not-allowed;
			opacity: 0.5;
		}

		.discord-button-launch {
			margin-left: 8px;
		}

		.discord-button-emoji {
			margin-right: 4px;
			object-fit: contain;
			width: 1.375em;
			height: 1.375em;
			vertical-align: bottom;
		}
	`;

	/**
	 * The emoji URL to use in the button.
	 */
	@property({ type: String, reflect: true, attribute: 'emoji' })
	public emoji: string;

	/**
	 * The name of the emoji used in the button.
	 */
	@property({ type: String, reflect: true, attribute: 'emoji-name' })
	public emojiName = 'emoji';

	/**
	 * The URL for the button. Setting this will force the button type to be `secondary`.
	 */
	@property({ type: String, reflect: true, attribute: 'url' })
	public url: string;

	/**
	 * Whether to show the button as disabled.
	 */
	@property({ type: Boolean, reflect: true, attribute: 'disabled' })
	public disabled = false;

	/**
	 * The type of button this is, this will change the color of the button.
	 * Valid values: `primary`, `secondary`, `success`, `destructive`.
	 */
	@property({ type: String, reflect: true, attribute: 'type' })
	public type: 'primary' | 'secondary' | 'success' | 'destructive' = 'secondary';

	// @Watch('type')
	public handleType(value: string) {
		if (typeof value !== 'string') {
			throw new TypeError('DiscordButton `type` prop must be a string.');
		} else if (!['primary', 'secondary', 'success', 'destructive'].includes(value)) {
			throw new RangeError("DiscordButton `type` prop must be one of: 'primary', 'secondary', 'success', 'destructive'");
		}
	}

	protected override render() {
		// const parent: HTMLDiscordActionRowElement = this.el.parentElement as HTMLDiscordActionRowElement;

		if (this.parentElement?.tagName.toLowerCase() !== 'discord-action-row') {
			throw new Error('All <discord-button> components must be direct children of <discord-action-row>.');
		}

		const isActive = this.url && !this.disabled;

		const content = html`
			${this.emoji ? html`<img src=${this.emoji} alt=${this.emojiName} draggable="true" class="discord-button-emoji" />` : null}
			<span>
				<slot></slot>
			</span>
			${this.url ? html`${LaunchIcon()}` : null}
		`;

		if (isActive) {
			return html` <a class="discord-button discord-button-secondary" href=${this.url} target="_blank" rel="noopener noreferrer">
				${content}
			</a>`;
		}
		return html` <div class=${`discord-button discord-button-${this.type} discord-button-${this.disabled ? 'disabled' : 'hoverable'}`}>
			${content}
		</div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-button': DiscordButton;
	}
}