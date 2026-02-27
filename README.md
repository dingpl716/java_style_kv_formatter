# java_style_kv_formatter

## How to run
- Open command palette
- Find and run "Format Java-Style KV"
- You can format a whole file or just selected content

Format following
```
[{key=user_format_imp_30d, value={values=[8308485221174584350]}}, {key=user_type_imp_7d, value={values=[-8654208465021176385, 8539309223978587676]}}, {key=user_cta_imp_7d, value={values=[382951972553456956, -4665502388165577513, 5560474558313719922, 6222577463753643358, 3055786706142010250, -2085472805540378527]}}, {key=user_iab_tier2_imp_7d, value={values=[Credit and Debt Repair/Credit Reporting_2, Construction_5, Food Delivery Services_1, Retirement Planning_1, Home Improvement and Repair_5, Automotive Services_1, Automotive Ownership_10, Workout and Step Tracking Applications_1]}}, {key=user_event_type_imp_7d, value={values=[click_button_10, complete_payment_3, submit_form_10]}}, {key=user_type_imp_30d, value={values=[1186369134782791706, 4624647156275965732, -3717861268011138064]}}, {key=user_is_vertical_imp_30d, value={values=[4411874710763797115, -1912067761456544140]}}, {key=user_cta_imp_30d, value={values=[-2260321353917446908, 2013883569233716194, -8084376891784530305, 1888880510138447550, -4419534588807318199, 4308842510607803308, 5335850884890165389, 6890365347107364192, 3604397341722326033, -3105118318740528953]}}, {key=user_event_type_imp_30d, value={values=[click_button_30, app_install_1, complete_payment_10, contact_1, conversion_event_3, complete_registration_5, submit_form_10]}}, {key=user_iab_tier2_imp_30d, value={values=[Credit and Debt Repair/Credit Reporting_3, Construction_10, Financial Investment and Management Applications_1, Student Financial Aid_1, Healthcare Reform_1, Food Delivery Services_2, Insurance_5, Retirement Planning_3, Core Gaming_1, Real Estate Services For Owners_2, Home Improvement and Repair_5, Automotive Services_1, Automotive Ownership_30, Workout and Step Tracking Applications_1, Clinical Research_3, Medical and Biotechnology_1]}}, {key=user_imp_no_clk_bundle_list_30d, value={values=[com.king.candycrushsaga]}}, {key=user_is_vertical_imp_7d, value={values=[8092968121507816002, -1872540707132711984]}}, {key=user_format_imp_7d, value={values=[2519383064059586678]}}]
```

into
```
[
  {
    key=user_format_imp_30d,
    value={
      values=[
        8308485221174584350
      ]
    }
  },
  {
    key=user_type_imp_7d,
    value={
      values=[
        -8654208465021176385,
        8539309223978587676
      ]
    }
  },
  {
    key=user_cta_imp_7d,
    value={
      values=[
        382951972553456956,
        -4665502388165577513,
        5560474558313719922,
        6222577463753643358,
        3055786706142010250,
        -2085472805540378527
      ]
    }
  },
  {
    key=user_iab_tier2_imp_7d,
    value={
      values=[
        Credit and Debt Repair/Credit Reporting_2,
        Construction_5,
        Food Delivery Services_1,
        Retirement Planning_1,
        Home Improvement and Repair_5,
        Automotive Services_1,
        Automotive Ownership_10,
        Workout and Step Tracking Applications_1
      ]
    }
  },
  {
    key=user_event_type_imp_7d,
    value={
      values=[
        click_button_10,
        complete_payment_3,
        submit_form_10
      ]
    }
  },
  {
    key=user_type_imp_30d,
    value={
      values=[
        1186369134782791706,
        4624647156275965732,
        -3717861268011138064
      ]
    }
  },
  {
    key=user_is_vertical_imp_30d,
    value={
      values=[
        4411874710763797115,
        -1912067761456544140
      ]
    }
  },
  {
    key=user_cta_imp_30d,
    value={
      values=[
        -2260321353917446908,
        2013883569233716194,
        -8084376891784530305,
        1888880510138447550,
        -4419534588807318199,
        4308842510607803308,
        5335850884890165389,
        6890365347107364192,
        3604397341722326033,
        -3105118318740528953
      ]
    }
  },
  {
    key=user_event_type_imp_30d,
    value={
      values=[
        click_button_30,
        app_install_1,
        complete_payment_10,
        contact_1,
        conversion_event_3,
        complete_registration_5,
        submit_form_10
      ]
    }
  },
  {
    key=user_iab_tier2_imp_30d,
    value={
      values=[
        Credit and Debt Repair/Credit Reporting_3,
        Construction_10,
        Financial Investment and Management Applications_1,
        Student Financial Aid_1,
        Healthcare Reform_1,
        Food Delivery Services_2,
        Insurance_5,
        Retirement Planning_3,
        Core Gaming_1,
        Real Estate Services For Owners_2,
        Home Improvement and Repair_5,
        Automotive Services_1,
        Automotive Ownership_30,
        Workout and Step Tracking Applications_1,
        Clinical Research_3,
        Medical and Biotechnology_1
      ]
    }
  },
  {
    key=user_imp_no_clk_bundle_list_30d,
    value={
      values=[
        com.king.candycrushsaga
      ]
    }
  },
  {
    key=user_is_vertical_imp_7d,
    value={
      values=[
        8092968121507816002,
        -1872540707132711984
      ]
    }
  },
  {
    key=user_format_imp_7d,
    value={
      values=[
        2519383064059586678
      ]
    }
  }
]
```
