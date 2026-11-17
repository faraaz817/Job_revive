# Coles 360 prep plan — campaign measurement project

Made 17 Nov 2026, while waiting for Michael's position descriptions. Three weeks, about 2–3 hours a day
alongside Vayaa.

## Why this project

Coles 360 sells proof that ads work. Every earlier Coles 360 data ad came back to campaign measurement,
SQL, Snowflake and (for the Data Analyst) Power BI. These gaps are in [notes.md](notes.md):

| Gap | Covered by |
| --- | --- |
| Campaign measurement: did the ad cause the sale? | Weeks 2–3: the analysis |
| SQL you can show | Weeks 1–3: daily practice + all analysis in SQL |
| Snowflake | Weeks 1–3: data lives in Snowflake |
| Power BI | Week 3: dashboard |
| Years of experience | Can't be learned. The referral has to carry this. |

## The project

**"Did this campaign actually increase sales?"** Built on real supermarket loyalty data with Snowflake,
SQL, Python and Power BI. A small version of what Coles 360's measurement team does.

**Data:** Dunnhumby *The Complete Journey*. About 2,500 households, two years of transactions, plus
marketing campaigns and coupons. Free with sign-up.

---

## Week 1 (17–23 Nov): set up, SQL, concepts

- [ ] **Day 1–2:** start a Snowflake free trial.
- [ ] **Day 1–2:** download *The Complete Journey*. Load the transactions, households, campaigns,
      coupons and products tables into Snowflake.
- [ ] **Every day, ~1 hour:** SQL practice (LeetCode SQL 50 or DataLemur). Focus on joins,
      `GROUP BY` / `HAVING`, CTEs and window functions.
- [ ] **Every day, ~30 min:** learn the measurement concepts:
  - [ ] test vs control groups, holdouts
  - [ ] pre / during / post comparison
  - [ ] difference-in-differences (did the test group's sales rise more than the control group's over
        the same period?)
  - [ ] selection bias
  - [ ] incrementality and ROAS (return on ad spend)
- [ ] **Check first:** Power BI Desktop only runs on Windows. If your laptop is Linux or Mac, line up
      a Windows machine or virtual machine before week 3.

**Done when:** data is in Snowflake and you've answered 10 exploratory questions in SQL (spend per
household per week, campaign reach, top categories, and so on).

## Week 2 (24–30 Nov): the analysis. Course starts this week.

- [ ] Pick one campaign. Test group = households that received it.
- [ ] **The catch:** those households were chosen, not random. Build a matched control group of
      similar households that didn't get it. Match on pre-campaign spend, shopping frequency and
      demographics with propensity score matching in Python.
- [ ] Measure weekly spend before, during and after the campaign.
- [ ] Calculate the extra sales from the campaign with difference-in-differences.
- [ ] Put a confidence range on it with a bootstrap.
- [ ] **Check:** did test and control track each other before the campaign started?
- [ ] **Check:** placebo test. Fake a campaign date and confirm you find no effect.
- [ ] **Course:** if the recordings are open, watch the Power BI weeks (3–4) and SQL weeks (6–8)
      now instead of waiting for them.

**Done when:** you have one number with a range, such as "+X% in sales, 95% CI [a, b]", and you
trust it.

## Week 3 (1–7 Dec): dashboard, write-up, publish

- [ ] **Power BI dashboard:** headline lift, test vs control trend over time, and a breakdown by
      household type.
- [ ] **README:** question → method → result → limitations. Say plainly what the data can't prove.
- [ ] Push it to GitHub.
- [ ] Add it to the Coles resume as a Key Project. Also add to `Source/` so it can be cited.
- [ ] Practise a 2-minute spoken walkthrough.

**Done when:** someone who has never seen it understands the result in 2 minutes.

---

## If the PDs arrive early

Don't stop the project. Apply with the resume as it is, and tell Michael the project is in progress.
Finish it before the interview, where it matters most.

## Alongside the plan

- [ ] Reply to Michael: which role suits you better, and is a 485 OK?
- [ ] **24 Nov:** start the Full-Stack Data Professional program (The Data & AI Institute). Add it to
      the resume as "Nov 2026 – present" once you've started.
- [ ] When the PDs arrive: replace `jd.md` with the real text and redo the criteria map in
      `notes.md`.
