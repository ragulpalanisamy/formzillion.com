import { get, snakeCase } from "lodash";

export const teamDetails = (teams: any) => {
  teams = teams.find((team: any) => team.team.type === "default");

  const { teamSlug, teamId, teamName, teamAvatar, plan, disabled } =
    getTeamDetails(teams.team);

  const url = `/${teamSlug}/team/settings/billing`;

  return { teamSlug, teamId, teamName, teamAvatar, plan, url, disabled };
};

export const getExportModelData = (userData: any, pathName: any) => {
  const formattedPathName = pathName.split("/");
  let teamSlug = get(formattedPathName, "1", "");
  const teams = get(userData, "teams", []);

  userData = teams.find((team: any) => team.slug === teamSlug);

  const { teamId, teamName, teamAvatar, plan, disabled, teamType, url } =
    getTeamDetails(userData);

  return {
    teamSlug,
    teamId,
    teamName,
    teamAvatar,
    plan,
    url,
    disabled,
    teamType,
  };
};

export const getTeamDetails = (teams: any) => {
  const teamSlug = get(teams, "slug", "");
  const teamId = get(teams, "id", "");
  const teamName = get(teams, "name", "");
  const teamAvatar = get(teams, "avatar", "");
  const plan = get(teams, "planName", "");
  const formatedPlanName = snakeCase(plan);
  const teamType = get(teams, "type", "");
  const url =
    teamType === "default"
      ? `/${teamSlug}/team/settings/billing`
      : `/${teamSlug}/settings/billing`;
  const disabled = formatedPlanName === "free" ? true : false;

  return {
    teamSlug,
    teamId,
    teamName,
    teamAvatar,
    plan: formatedPlanName,
    url,
    disabled,
    teamType,
  };
};
