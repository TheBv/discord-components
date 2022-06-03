import { css } from 'lit';

export const authorInfoStyles = css`
	.discord-message .discord-author-info {
		display: inline-flex;
		align-items: center;
		font-size: 16px;
		margin-right: 0.25rem;
	}

	.discord-compact-mode .discord-message .discord-author-info {
		margin-right: 0;
	}

	.discord-message .discord-author-info .discord-author-username {
		color: #fff;
		font-size: 1em;
		font-weight: 500;
	}

	.discord-light-theme .discord-message .discord-author-info .discord-author-username {
		color: #23262a;
	}

	.discord-message .discord-author-info .discord-application-tag {
		background-color: #5865f2;
		color: #fff;
		font-size: 0.625em;
		margin-left: 4px;
		border-radius: 3px;
		line-height: 100%;
		text-transform: uppercase;
		/* Use flex layout to ensure both verified icon and "BOT" text are aligned to center */
		display: flex;
		align-items: center;
		/* Styling taken through Inspect Element on Discord client for Windows */
		height: 0.9375rem;
		padding: 0 0.275rem;
		margin-top: 0.075em;
		border-radius: 0.1875rem;
	}

	.discord-message .discord-author-info .discord-application-tag.discord-application-tag-op {
		background-color: #c9cdfb;
		color: #4752c4;
		border-radius: 0.4rem;
	}

	.discord-message .discord-author-info .discord-application-tag-verified {
		display: inline-block;
		width: 0.9375rem;
		height: 0.9375rem;
		margin-left: -0.25rem;
	}

	.discord-message .discord-author-info .discord-author-role-icon {
		margin-left: 0.25rem;
		vertical-align: top;
		height: calc(1rem + 4px);
		width: calc(1rem + 4px);
	}

	.discord-compact-mode .discord-message .discord-author-info .discord-author-username {
		margin-left: 8px;
		margin-right: 4px;
	}

	.discord-compact-mode .discord-message .discord-author-info .discord-application-tag {
		margin-left: 0;
		margin-left: 5px;
		margin-right: 5px;
		padding-left: 10px;
		padding-right: 4px;
	}

	.discord-compact-mode .discord-message .discord-author-info .discord-application-tag-verified {
		margin-right: 0.7em;
		margin-left: -0.7em;
	}
`;
