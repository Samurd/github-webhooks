import { GitHubIssuePayload, GitHubStarPayload } from "../../interfaces";

export class GithubService {
  constructor() {}

  onStar(payload: GitHubStarPayload): string {
    const { sender, repository, action } = payload;

    return `User ${sender.login} ${action} star on ${repository.full_name}`;
  }

  onIssue(payload: GitHubIssuePayload): string {
    const { issue, action } = payload;

    if (action === "opened") {
      return `An Issue was opened with this title ${issue.title}`;
    }

    if (action === "closed") {
      return `An Issue was closed by ${issue.user.login}`;
    }

    return `Unhandled action for the issue event ${action}`;
  }
}
