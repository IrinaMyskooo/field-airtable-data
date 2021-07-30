import Airtable from "airtable";

import { AIRTABLE_API_KEY, HASH_KEY } from "../constants";

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(HASH_KEY);

export default base;
