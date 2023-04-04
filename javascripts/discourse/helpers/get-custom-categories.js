import { registerUnbound } from "discourse-common/lib/helpers";
import { withPluginApi } from "discourse/lib/plugin-api";
import Category from "discourse/models/category";

registerUnbound("getAbbreviation", categoryName => {
  let abbr = "";
  return abbr;
});
