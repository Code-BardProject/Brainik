// Brainik i18n - Internationalization
// Поддержка языков: Armenian (hy), Russian (ru), English (en)

const i18n = {
    currentLang: localStorage.getItem('brainik_lang') || 'ru',
    
    translations: {
        ru: {
            // Navigation
            nav_home: 'Главная',
            nav_puzzles: 'ИГРИ',
            nav_hero_cards: 'Hero Cards',
            nav_ranking: 'Рейтинг',
            nav_dashboard: 'Мой кабинет',
            nav_parents: 'Родителям',
            nav_teacher: 'Учителям',
            nav_admin: 'Админ',
            nav_logout: 'Выйти',
            
            // Home Page
            home_title: 'Brainik - Обучение через игру!',
            home_subtitle: 'Интерактивная платформа для детей 2-15 лет',
            home_cta_start: 'Начать',
            home_cta_open: 'Открыть',
            home_cta_more: 'Подробнее',
            
            // Age Groups
            age_select: 'Выбери свой возраст',
            age_2_3_title: 'Age 2-3',
            age_2_3_desc: 'Предварительные игры, цвета, формы',
            age_2_3_tag: 'Малыши',
            age_4_6_title: 'Age 4-6',
            age_4_6_desc: 'Логика, буквы, простая математика',
            age_4_6_tag: 'Дошкольники',
            age_7_9_title: 'Age 7-9',
            age_7_9_desc: 'Математика, внимание, память',
            age_7_9_tag: 'Младшие школьники',
            age_10_title: 'Age 10+',
            age_10_desc: 'Сложные ИГРИ, программирование, викторины',
            age_10_tag: 'Подростки',
            
            // Categories
            categories_title: 'Категории заданий',
            cat_logic: 'Логика',
            cat_logic_desc: 'Логические задачи и головоломки',
            cat_world: 'Изучаем мир',
            cat_world_desc: 'География, животные, природа',
            cat_history: 'История Армении',
            cat_history_desc: 'Героическая история и культура',
            cat_math: 'Математика',
            cat_math_desc: 'Задачи и упражнения',
            cat_coding: 'Программирование',
            cat_coding_desc: 'Основы кодинга (Age 10+)',
            cat_creative: 'Творчество',
            cat_creative_desc: 'Искусство и творческие задания',
            
            // Hero Cards
            hero_title: 'Собери коллекцию Hero Cards',
            hero_subtitle: 'Изучай исторических героев и получай награды',
            hero_view_all: 'Посмотреть все',
            hero_locked: 'Открой больше!',
            
            // Progress
            progress_title: 'Твой прогресс',
            progress_stars: 'Звёзд',
            progress_cards: 'Hero Cards',
            progress_level: 'Уровень',
            progress_certificates: 'Сертификатов',
            
            // Dashboard
            dashboard_welcome: 'Привет милая',
            dashboard_subtitle: 'Добро пожаловать в твой личный кабинет!',
            dashboard_nick: 'Ник',
            dashboard_email: 'Email',
            dashboard_games_bought: 'Куплено игр',
            dashboard_favorites: 'В избранном',
            dashboard_hours: 'Часов в игре',
            dashboard_logout: 'Выйти из аккаунта',
            
            // Puzzles
            puzzles_title: 'ИГРИ и упражнения',
            puzzles_subtitle: 'Выбери задание по своему возрасту и начни обучение!',
            puzzles_filter_all: 'Все',
            puzzles_progress: 'Твой прогресс',
            puzzles_completed: 'Выполнено',
            puzzles_of: 'из',
            puzzles_tasks: 'заданий',
            puzzles_level: 'Уровень',
            puzzles_stars: 'Звёзды',
            puzzles_start: 'Начать',
            puzzles_completed_btn: 'Пройдено',
            
            // Ranking
            ranking_title: 'Рейтинг игроков',
            ranking_subtitle: 'Соревнуйся с другими и попади в топ!',
            ranking_global: 'Глобальный',
            ranking_friends: 'Друзья',
            ranking_school: 'Школа',
            ranking_city: 'Город',
            ranking_player: 'Игрок',
            ranking_score: 'Очки',
            ranking_level: 'Уровень',
            
            // Parents Dashboard
            parents_title: 'Панель управления',
            parents_subtitle: 'Отслеживай прогресс своих детей',
            parents_add_child: 'Добавить ребёнка',
            parents_stats: 'Статистика',
            parents_activity: 'Активность за месяц',
            parents_achievements: 'Последние достижения',
            parents_tasks: 'Задания на сегодня',
            parents_assign_task: 'Назначить новое задание',
            
            // Teacher Dashboard
            teacher_title: 'Панель учителя',
            teacher_subtitle: 'Управление классом',
            teacher_students: 'Мои ученики',
            teacher_assign: 'Назначить задание',
            teacher_online_class: 'Начать онлайн-урок',
            
            // Admin
            admin_title: 'Admin Panel',
            admin_overview: 'Обзор системы',
            admin_users: 'Всего пользователей',
            admin_active: 'Активных сегодня',
            admin_premium: 'Премиум подписчиков',
            admin_new: 'Новых за неделю',
            admin_puzzles: 'Управление пазлами',
            admin_heroes: 'Управление Hero Cards',
            admin_upload: 'Загрузка контента',
            admin_notifications: 'Массовые уведомления',
            
            // Auth
            auth_login: 'Вход',
            auth_register: 'Регистрация',
            auth_email: 'Email',
            auth_password: 'Пароль',
            auth_nickname: 'Имя или никнейм',
            auth_confirm_password: 'Повторите пароль',
            auth_remember: 'Запомнить меня',
            auth_forgot: 'Забыли пароль?',
            auth_no_account: 'Нет аккаунта?',
            auth_has_account: 'Уже есть аккаунт?',
            auth_agree: 'Соглашаюсь с',
            auth_terms: 'условиями использования',
            auth_create_account: 'Создать аккаунт',
            
            // Common
            btn_save: 'Сохранить',
            btn_cancel: 'Отмена',
            btn_edit: 'Изменить',
            btn_delete: 'Удалить',
            btn_back: 'Назад',
            btn_next: 'Далее',
            btn_finish: 'Завершить',
            loading: 'Загрузка...',
            error: 'Ошибка',
            success: 'Успешно!',
            
            // Hero Cards Page
            hero_collection_title: 'Собери коллекцию Hero Cards',
            hero_collection_desc: 'Изучай исторических героев и получай награды',
            hero_collected: 'Собрано карт',
            hero_total: 'Всего карт',
            hero_progress: 'Коллекция',
            hero_unlock_more: 'Открой больше!',
            hero_tigran: 'Тигран Великий',
            hero_vardan: 'Вардан Мамиконян',
            hero_mesrop: 'Месроп Маштоц',
            hero_rarity_legendary: 'ЛЕГЕНДАРНАЯ',
            hero_rarity_epic: 'ЭПИЧЕСКАЯ',
            hero_rarity_rare: 'РЕДКАЯ',
            hero_rarity_common: 'ОБЫЧНАЯ',
            hero_reward_text: 'Собери все 12 карт и получи легендарную награду!',
            
            // Teacher Dashboard
            teacher_header: 'Панель учителя',
            teacher_subtitle: 'Управление классом и отслеживание прогресса учеников',
            teacher_students_count: 'Учеников в классе',
            teacher_completed: 'Выполненных заданий',
            teacher_average: 'Средний прогресс',
            teacher_active: 'Активных заданий',
            teacher_my_students: 'Мои ученики',
            teacher_assign_task: 'Назначить задание',
            teacher_student: 'Ученик',
            teacher_report: 'Отчёт',
            teacher_task: 'Задание',
            teacher_assign_form: 'Назначить задание',
            teacher_online_class: 'Начать онлайн-урок',
            
            // Parents Dashboard
            parents_header: 'Панель управления',
            parents_subtitle: 'Отслеживай прогресс своих детей и управляй их обучением',
            parents_add_child: 'Добавить ребёнка',
            parents_stats: 'Статистика',
            parents_activity: 'Активность за месяц',
            parents_achievements: 'Последние достижения',
            parents_tasks_today: 'Задания на сегодня',
            parents_assign_new: 'Назначить новое задание',
            parents_done: 'Выполнено',
            parents_in_progress: 'В процессе',
            
            // Admin Panel
            admin_header: 'Обзор системы',
            admin_total_users: 'Всего пользователей',
            admin_active_today: 'Активных сегодня',
            admin_premium: 'Премиум подписчиков',
            admin_new_week: 'Новых за неделю',
            admin_manage_puzzles: 'Управление пазлами',
            admin_manage_heroes: 'Управление Hero Cards',
            admin_upload: 'Загрузка контента',
            admin_notifications: 'Массовые уведомления',
            admin_add_puzzle: 'Добавить пазл',
            admin_add_hero: 'Добавить героя',
            admin_edit: 'Edit',
            admin_delete: 'Delete',
            admin_active_status: 'Активен',
            admin_draft: 'Черновик',
            admin_send: 'Отправить',
            
            // Settings
            settings_title: 'Настройки',
            settings_language: 'Язык',
            settings_profile: 'Профиль',
            settings_notifications: 'Уведомления',
            settings_privacy: 'Приватность',
            
            // Common buttons and labels
            btn_start: 'Начать',
            btn_open: 'Открыть',
            btn_more: 'Подробнее',
            btn_view_all: 'Посмотреть все',
            btn_save: 'Сохранить',
            btn_cancel: 'Отмена',
            btn_edit: 'Изменить',
            btn_delete: 'Удалить',
            btn_back: 'Назад',
            btn_next: 'Далее',
            btn_finish: 'Завершить',
            btn_send: 'Отправить',
            btn_add: 'Добавить',
            loading: 'Загрузка...',
            error: 'Ошибка',
            success: 'Успешно!',
            
            // Footer
            footer_about: 'Интерактивная образовательная платформа для детей 2-15 лет',
            footer_age_groups: 'Возрастные группы',
            footer_menu: 'Меню',
            footer_contact: 'Контакты',
            footer_terms: 'Условия использования',
            footer_privacy: 'Privacy Policy',
            footer_rights: 'Все права защищены'
        },
        
        en: {
            // Navigation
            nav_home: 'Home',
            nav_puzzles: 'Puzzles',
            nav_hero_cards: 'Hero Cards',
            nav_ranking: 'Ranking',
            nav_dashboard: 'My Dashboard',
            nav_parents: 'Parents',
            nav_teacher: 'Teacher',
            nav_admin: 'Admin',
            nav_logout: 'Logout',
            
            // Home Page
            home_title: 'Brainik - Learn through play!',
            home_subtitle: 'Interactive platform for kids 2-15 years',
            home_cta_start: 'Start',
            home_cta_open: 'Open',
            home_cta_more: 'Learn more',
            
            // Age Groups
            age_select: 'Choose your age',
            age_2_3_title: 'Age 2-3',
            age_2_3_desc: 'Pre-games, colors, shapes',
            age_2_3_tag: 'Toddlers',
            age_4_6_title: 'Age 4-6',
            age_4_6_desc: 'Logic, letters, basic math',
            age_4_6_tag: 'Preschool',
            age_7_9_title: 'Age 7-9',
            age_7_9_desc: 'Math, attention, memory',
            age_7_9_tag: 'Elementary',
            age_10_title: 'Age 10+',
            age_10_desc: 'Complex puzzles, coding, quizzes',
            age_10_tag: 'Teens',
            
            // Categories
            categories_title: 'Exercise Categories',
            cat_logic: 'Logic',
            cat_logic_desc: 'Logic puzzles and riddles',
            cat_world: 'Explore World',
            cat_world_desc: 'Geography, animals, nature',
            cat_history: 'Armenian History',
            cat_history_desc: 'Heroic history and culture',
            cat_math: 'Mathematics',
            cat_math_desc: 'Problems and exercises',
            cat_coding: 'Programming',
            cat_coding_desc: 'Coding basics (Age 10+)',
            cat_creative: 'Creativity',
            cat_creative_desc: 'Art and creative tasks',
            
            // Hero Cards
            hero_title: 'Collect Hero Cards',
            hero_subtitle: 'Learn about historical heroes and earn rewards',
            hero_view_all: 'View all',
            hero_locked: 'Unlock more!',
            
            // Progress
            progress_title: 'Your Progress',
            progress_stars: 'Stars',
            progress_cards: 'Hero Cards',
            progress_level: 'Level',
            progress_certificates: 'Certificates',
            
            // Dashboard
            dashboard_welcome: 'Hello dear',
            dashboard_subtitle: 'Welcome to your personal dashboard!',
            dashboard_nick: 'Nickname',
            dashboard_email: 'Email',
            dashboard_games_bought: 'Games bought',
            dashboard_favorites: 'Favorites',
            dashboard_hours: 'Hours played',
            dashboard_logout: 'Logout',
            
            // Puzzles
            puzzles_title: 'Puzzles & Exercises',
            puzzles_subtitle: 'Choose a task for your age and start learning!',
            puzzles_filter_all: 'All',
            puzzles_progress: 'Your Progress',
            puzzles_completed: 'Completed',
            puzzles_of: 'of',
            puzzles_tasks: 'tasks',
            puzzles_level: 'Level',
            puzzles_stars: 'Stars',
            puzzles_start: 'Start',
            puzzles_completed_btn: 'Completed',
            
            // Ranking
            ranking_title: 'Player Rankings',
            ranking_subtitle: 'Compete with others and reach the top!',
            ranking_global: 'Global',
            ranking_friends: 'Friends',
            ranking_school: 'School',
            ranking_city: 'City',
            ranking_player: 'Player',
            ranking_score: 'Score',
            ranking_level: 'Level',
            
            // Parents Dashboard
            parents_title: 'Parent Dashboard',
            parents_subtitle: 'Track your children\'s progress',
            parents_add_child: 'Add child',
            parents_stats: 'Statistics',
            parents_activity: 'Monthly Activity',
            parents_achievements: 'Recent Achievements',
            parents_tasks: 'Today\'s Tasks',
            parents_assign_task: 'Assign new task',
            
            // Teacher Dashboard
            teacher_title: 'Teacher Dashboard',
            teacher_subtitle: 'Classroom management',
            teacher_students: 'My Students',
            teacher_assign: 'Assign Task',
            teacher_online_class: 'Start Online Class',
            
            // Admin
            admin_title: 'Admin Panel',
            admin_overview: 'System Overview',
            admin_users: 'Total Users',
            admin_active: 'Active Today',
            admin_premium: 'Premium Subscribers',
            admin_new: 'New This Week',
            admin_puzzles: 'Manage Puzzles',
            admin_heroes: 'Manage Hero Cards',
            admin_upload: 'Upload Content',
            admin_notifications: 'Mass Notifications',
            
            // Auth
            auth_login: 'Login',
            auth_register: 'Register',
            auth_email: 'Email',
            auth_password: 'Password',
            auth_nickname: 'Name or nickname',
            auth_confirm_password: 'Confirm password',
            auth_remember: 'Remember me',
            auth_forgot: 'Forgot password?',
            auth_no_account: 'No account?',
            auth_has_account: 'Already have an account?',
            auth_agree: 'I agree to',
            auth_terms: 'terms of use',
            auth_create_account: 'Create Account',
            
            // Common
            btn_save: 'Save',
            btn_cancel: 'Cancel',
            btn_edit: 'Edit',
            btn_delete: 'Delete',
            btn_back: 'Back',
            btn_next: 'Next',
            btn_finish: 'Finish',
            loading: 'Loading...',
            error: 'Error',
            success: 'Success!',
            
            // Hero Cards Page
            hero_collection_title: 'Collect Hero Cards',
            hero_collection_desc: 'Learn about historical heroes and earn rewards',
            hero_collected: 'Cards collected',
            hero_total: 'Total cards',
            hero_progress: 'Collection',
            hero_unlock_more: 'Unlock more!',
            hero_tigran: 'Tigran the Great',
            hero_vardan: 'Vardan Mamikonian',
            hero_mesrop: 'Mesrop Mashtots',
            hero_rarity_legendary: 'LEGENDARY',
            hero_rarity_epic: 'EPIC',
            hero_rarity_rare: 'RARE',
            hero_rarity_common: 'COMMON',
            hero_reward_text: 'Collect all 12 cards and get a legendary reward!',
            
            // Teacher Dashboard
            teacher_header: 'Teacher Dashboard',
            teacher_subtitle: 'Classroom management and student progress tracking',
            teacher_students_count: 'Students in class',
            teacher_completed: 'Completed tasks',
            teacher_average: 'Average progress',
            teacher_active: 'Active tasks',
            teacher_my_students: 'My Students',
            teacher_assign_task: 'Assign Task',
            teacher_student: 'Student',
            teacher_report: 'Report',
            teacher_task: 'Task',
            teacher_assign_form: 'Assign Task',
            teacher_online_class: 'Start Online Class',
            
            // Parents Dashboard
            parents_header: 'Parent Dashboard',
            parents_subtitle: 'Track your children\'s progress and manage their learning',
            parents_add_child: 'Add child',
            parents_stats: 'Statistics',
            parents_activity: 'Monthly Activity',
            parents_achievements: 'Recent Achievements',
            parents_tasks_today: 'Today\'s Tasks',
            parents_assign_new: 'Assign new task',
            parents_done: 'Done',
            parents_in_progress: 'In progress',
            
            // Admin Panel
            admin_header: 'System Overview',
            admin_total_users: 'Total Users',
            admin_active_today: 'Active Today',
            admin_premium_users: 'Premium Subscribers',
            admin_new_week: 'New This Week',
            admin_manage_puzzles: 'Manage Puzzles',
            admin_manage_heroes: 'Manage Hero Cards',
            admin_upload: 'Upload Content',
            admin_notifications: 'Mass Notifications',
            admin_add_puzzle: 'Add Puzzle',
            admin_add_hero: 'Add Hero',
            admin_edit: 'Edit',
            admin_delete: 'Delete',
            admin_active_status: 'Active',
            admin_draft: 'Draft',
            admin_send: 'Send',
            
            // Settings
            settings_title: 'Settings',
            settings_language: 'Language',
            settings_profile: 'Profile',
            settings_notifications: 'Notifications',
            settings_privacy: 'Privacy',
            
            // Common buttons and labels
            btn_start: 'Start',
            btn_open: 'Open',
            btn_more: 'More',
            btn_view_all: 'View all',
            btn_save: 'Save',
            btn_cancel: 'Cancel',
            btn_edit: 'Edit',
            btn_delete: 'Delete',
            btn_back: 'Back',
            btn_next: 'Next',
            btn_finish: 'Finish',
            btn_send: 'Send',
            btn_add: 'Add',
            loading: 'Loading...',
            error: 'Error',
            success: 'Success!',
            
            // Footer
            footer_about: 'Interactive educational platform for children 2-15 years',
            footer_age_groups: 'Age Groups',
            footer_menu: 'Menu',
            footer_contact: 'Contact',
            footer_terms: 'Terms of Use',
            footer_privacy: 'Privacy Policy',
            footer_rights: 'All rights reserved'
        },
        
        hy: {
            // Navigation - Armenian
            nav_home: 'Գլխավոր',
            nav_puzzles: 'Փազլներ',
            nav_hero_cards: 'Hero Cards',
            nav_ranking: 'Վարկանիշ',
            nav_dashboard: 'Իմ պրոֆիլը',
            nav_parents: 'Ծնողների',
            nav_teacher: 'Ուսուցիչ',
            nav_admin: 'Ադմին',
            nav_logout: 'Ելք',
            
            // Home Page
            home_title: 'Brainik - Սովորիր խաղալով!',
            home_subtitle: 'Ինտերակտիվ հարթակ 2-15 տարեկան երեխաների համար',
            home_cta_start: 'Սկսել',
            home_cta_open: 'Բացել',
            home_cta_more: 'Մանրամասն',
            
            // Age Groups
            age_select: 'Ընտրիր քո տարիքը',
            age_2_3_title: '2-3 տարեկան',
            age_2_3_desc: 'Նախախաղեր, գույներ, ձևեր',
            age_2_3_tag: 'Փոքրիկներ',
            age_4_6_title: '4-6 տարեկան',
            age_4_6_desc: 'Տրամաբանություն, տառեր, մաթեմատիկա',
            age_4_6_tag: 'Մանկապարտեզ',
            age_7_9_title: '7-9 տարեկան',
            age_7_9_desc: 'Մաթեմատիկա, ուշադրություն, հիշողություն',
            age_7_9_tag: 'Տարրական',
            age_10_title: '10+ տարեկան',
            age_10_desc: 'Բարդ փազլներ, ծրագրավորում, թեստեր',
            age_10_tag: 'Դեռահաս',
            
            // Categories
            categories_title: 'Առաջադրանքների կատեգորիաներ',
            cat_logic: 'Տրամաբանություն',
            cat_logic_desc: 'Տրամաբանական խնդիրներ և գլուխկոտրուկներ',
            cat_world: 'Ճանաչենք աշխարհը',
            cat_world_desc: 'Աշխարհագրություն, կենդանիներ, բնություն',
            cat_history: 'Հայոց պատմություն',
            cat_history_desc: 'Հերոսական պատմություն և մշակույթ',
            cat_math: 'Մաթեմատիկա',
            cat_math_desc: 'Առաջադրանքներ և վարժություններ',
            cat_coding: 'Ծրագրավորում',
            cat_coding_desc: 'Ծրագրավորման հիմունքներ (10+)',
            cat_creative: 'Ստեղծագործություն',
            cat_creative_desc: 'Արվեստ և ստեղծագործական առաջադրանքներ',
            
            // Hero Cards
            hero_title: 'Հավաքիր Hero Cards-երը',
            hero_subtitle: 'Ճանաչիր պատմական հերոսներին և ստացիր պարգևներ',
            hero_view_all: 'Դիտել բոլորը',
            hero_locked: 'Բացել ավելին!',
            
            // Progress
            progress_title: 'Քո առաջընթացը',
            progress_stars: 'Աստղեր',
            progress_cards: 'Hero Cards',
            progress_level: 'Մակարդակ',
            progress_certificates: 'Վկայականներ',
            
            // Dashboard
            dashboard_welcome: 'Ողջույն սիրելի',
            dashboard_subtitle: 'Բարի գալուստ քո անձնական պրոֆիլ!',
            dashboard_nick: 'Մականուն',
            dashboard_email: 'Էլ. փոստ',
            dashboard_games_bought: 'Գնված խաղեր',
            dashboard_favorites: 'Նախընտրած',
            dashboard_hours: 'Խաղացած ժամեր',
            dashboard_logout: 'Դուրս գալ',
            
            // Puzzles
            puzzles_title: 'Փազլներ և առաջադրանքներ',
            puzzles_subtitle: 'Ընտրիր քո տարիքին համապատասխան առաջադրանք և սկսիր սովորել!',
            puzzles_filter_all: 'Բոլորը',
            puzzles_progress: 'Քո առաջընթացը',
            puzzles_completed: 'Ավարտված է',
            puzzles_of: 'ից',
            puzzles_tasks: 'առաջադրանք',
            puzzles_level: 'Մակարդակ',
            puzzles_stars: 'Աստղեր',
            puzzles_start: 'Սկսել',
            puzzles_completed_btn: 'Ավարտված',
            
            // Ranking
            ranking_title: 'Ֆուտբոլիստների վարկանիշ',
            ranking_subtitle: 'Մրցիր ուրիշների հետ և հասի գլխավորին!',
            ranking_global: 'Համաշխարհային',
            ranking_friends: 'Ընկերներ',
            ranking_school: 'Դպրոց',
            ranking_city: 'Քաղաք',
            ranking_player: 'Խաղացող',
            ranking_score: 'Միավորներ',
            ranking_level: 'Մակարդակ',
            
            // Parents Dashboard
            parents_title: 'Ծնողի վահանակ',
            parents_subtitle: 'Հետևիր քո երեխաների առաջընթացին',
            parents_add_child: 'Ավելացնել երեխա',
            parents_stats: 'Վիճակագրություն',
            parents_activity: 'Ամսական ակտիվություն',
            parents_achievements: 'Վերջին նվաճումները',
            parents_tasks: 'Այսօրվա առաջադրանքները',
            parents_assign_task: 'Նշանակել նոր առաջադրանք',
            
            // Teacher Dashboard
            teacher_title: 'Ուսուցչի վահանակ',
            teacher_subtitle: 'Դասարանի կառավարում',
            teacher_students: 'Իմ աշակերտները',
            teacher_assign: 'Նշանակել առաջադրանք',
            teacher_online_class: 'Սկսել առցանց դաս',
            
            // Admin
            admin_title: 'Ադմին վահանակ',
            admin_overview: 'Համակարգի ակնարկ',
            admin_users: 'Ընդհանուր օգտատերեր',
            admin_active: 'Ակտիվ այսօր',
            admin_premium: 'Պրեմիում բաժանորդներ',
            admin_new: 'Նոր այս շաբաթ',
            admin_puzzles: 'Փազլների կառավարում',
            admin_heroes: 'Hero Cards կառավարում',
            admin_upload: 'Բեռնել բովանդակություն',
            admin_notifications: 'Մասսային ծանուցումներ',
            
            // Auth
            auth_login: 'Մուտք',
            auth_register: 'Գրանցում',
            auth_email: 'Էլ. փոստ',
            auth_password: 'Գաղտնաբառ',
            auth_nickname: 'Անուն կամ մականուն',
            auth_confirm_password: 'Հաստատել գաղտնաբառը',
            auth_remember: 'Հիշել ինձ',
            auth_forgot: 'Մոռացել եք գաղտնաբառը?',
            auth_no_account: 'Չունեք հաշիվ?',
            auth_has_account: 'Արդեն ունեք հաշիվ?',
            auth_agree: 'Համաձայն եմ',
            auth_terms: 'օգտագործման պայմաններին',
            auth_create_account: 'Ստեղծել հաշիվ',
            
            // Common
            btn_save: 'Պահպանել',
            btn_cancel: 'Չեղարկել',
            btn_edit: 'Խմբագրել',
            btn_delete: 'Ջնջել',
            btn_back: 'Հետ',
            btn_next: 'Առաջ',
            btn_finish: 'Ավարտել',
            loading: 'Բեռնում...',
            error: 'Սխալ',
            success: 'Հաջողվեց!',
            
            // Hero Cards Page
            hero_collection_title: 'Հավաքիր Hero Cards-երը',
            hero_collection_desc: 'Ճանաչիր պատմական հերոսներին և ստացիր պարգևներ',
            hero_collected: 'Հավաքած քարտեր',
            hero_total: 'Ընդհանուր քարտեր',
            hero_progress: 'Հավաքածու',
            hero_unlock_more: 'Բացել ավելին!',
            hero_tigran: 'Տիգրան Մեծ',
            hero_vardan: 'Վարդան Մամիկոնյան',
            hero_mesrop: 'Մեսրոպ Մաշտոց',
            hero_rarity_legendary: 'ԼԵԳԵՆԴԱՐ',
            hero_rarity_epic: 'ԷՊԻԿ',
            hero_rarity_rare: 'ՀԱՃԵԼՈՒ',
            hero_rarity_common: 'ՍԵՎԱԿԱՆ',
            hero_reward_text: 'Հավաքիր բոլոր 12 քարտերը և ստացիր լեգենդար պարգև!',
            
            // Teacher Dashboard
            teacher_header: 'Ուսուցչի վահանակ',
            teacher_subtitle: 'Դասարանի կառավարում և աշակերտների առաջընթացի հետևում',
            teacher_students_count: 'Աշակերտներ դասարանում',
            teacher_completed: 'Ավարտված առաջադրանքներ',
            teacher_average: 'Միջին առաջընթաց',
            teacher_active: 'Ակտիվ առաջադրանքներ',
            teacher_my_students: 'Իմ աշակերտները',
            teacher_assign_task: 'Նշանակել առաջադրանք',
            teacher_student: 'Աշակերտ',
            teacher_report: 'Հաշվետվություն',
            teacher_task: 'Առաջադրանք',
            teacher_assign_form: 'Նշանակել առաջադրանք',
            teacher_online_class: 'Սկսել առցանց դաս',
            
            // Parents Dashboard
            parents_header: 'Ծնողի վահանակ',
            parents_subtitle: 'Հետևիր քո երեխաների առաջընթացին և կառավարիր նրանց ուսումը',
            parents_add_child: 'Ավելացնել երեխա',
            parents_stats: 'Վիճակագրություն',
            parents_activity: 'Ամսական ակտիվություն',
            parents_achievements: 'Վերջին նվաճումները',
            parents_tasks_today: 'Այսօրվա առաջադրանքները',
            parents_assign_new: 'Նշանակել նոր առաջադրանք',
            parents_done: 'Ավարտված',
            parents_in_progress: 'Ընթացքում է',
            
            // Admin Panel
            admin_header: 'Համակարգի ակնարկ',
            admin_total_users: 'Ընդհանուր օգտատերեր',
            admin_active_today: 'Ակտիվ այսօր',
            admin_premium_users: 'Պրեմիում բաժանորդներ',
            admin_new_week: 'Նոր այս շաբաթ',
            admin_manage_puzzles: 'Փազլների կառավարում',
            admin_manage_heroes: 'Hero Cards կառավարում',
            admin_upload: 'Բեռնել բովանդակություն',
            admin_notifications: 'Մասսային ծանուցումներ',
            admin_add_puzzle: 'Ավելացնել փազլ',
            admin_add_hero: 'Ավելացնել հերոս',
            admin_edit: 'Խմբագրել',
            admin_delete: 'Ջնջել',
            admin_active_status: 'Ակտիվ',
            admin_draft: 'Սևագիր',
            admin_send: 'Ուղարկել',
            
            // Settings
            settings_title: 'Կարգավորումներ',
            settings_language: 'Լեզու',
            settings_profile: 'Պրոֆիլ',
            settings_notifications: 'Ծանուցումներ',
            settings_privacy: 'Գաղտնիություն',
            
            // Common buttons and labels
            btn_start: 'Սկսել',
            btn_open: 'Բացել',
            btn_more: 'Մանրամասն',
            btn_view_all: 'Դիտել բոլորը',
            btn_save: 'Պահպանել',
            btn_cancel: 'Չեղարկել',
            btn_edit: 'Խմբագրել',
            btn_delete: 'Ջնջել',
            btn_back: 'Հետ',
            btn_next: 'Առաջ',
            btn_finish: 'Ավարտել',
            btn_send: 'Ուղարկել',
            btn_add: 'Ավելացնել',
            loading: 'Բեռնում...',
            error: 'Սխալ',
            success: 'Հաջողվեց!',
            
            // Footer
            footer_about: 'Ինտերակտիվ կրթական հարթակ 2-15 տարեկան երեխաների համար',
            footer_age_groups: 'Տարիքային խմբեր',
            footer_menu: 'Մենյու',
            footer_contact: 'Կապ',
            footer_terms: 'Օգտագործման պայմաններ',
            footer_privacy: 'Գաղտնիության քաղաքականություն',
            footer_rights: 'Բոլոր իրավունքները պաշտպանված են'
        }
    },
    
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('brainik_lang', lang);
            this.updatePageText();
            return true;
        }
        return false;
    },
    
    t(key) {
        return this.translations[this.currentLang][key] || key;
    },
    
    updatePageText() {
        // Если текущий язык русский, не нужно ничего переводить (текст уже на русском)
        if (this.currentLang === 'ru') return;
        
        // Получаем все текстовые узлы
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
        let node;
        const nodesToUpdate = [];
        
        while (node = walker.nextNode()) {
            const text = node.textContent.trim();
            if (text && text.length > 0 && !node.parentElement.closest('script')) {
                // Ищем перевод для этого текста (сравниваем с русским оригиналом)
                for (const [key, translatedValue] of Object.entries(this.translations[this.currentLang])) {
                    const originalText = this.translations['ru'][key];
                    if (text === originalText) {
                        nodesToUpdate.push({ node, value: translatedValue });
                        break;
                    }
                }
            }
        }
        
        // Обновляем найденные узлы
        nodesToUpdate.forEach(({ node, value }) => {
            node.textContent = value;
        });
        
        // Обновляем placeholder'ы
        document.querySelectorAll('[placeholder]').forEach(el => {
            const placeholder = el.getAttribute('placeholder');
            if (!placeholder) return;
            for (const [key, translatedValue] of Object.entries(this.translations[this.currentLang])) {
                const originalText = this.translations['ru'][key];
                if (placeholder === originalText) {
                    el.setAttribute('placeholder', translatedValue);
                    break;
                }
            }
        });
        
        // Обновляем title страницы
        const titleEl = document.querySelector('title');
        if (titleEl) {
            const currentTitle = titleEl.textContent;
            // Проверяем, есть ли перевод для текущего title
            for (const [key, translatedValue] of Object.entries(this.translations[this.currentLang])) {
                const originalText = this.translations['ru'][key];
                if (currentTitle === originalText || currentTitle.includes(originalText)) {
                    titleEl.textContent = translatedValue;
                    break;
                }
            }
        }
    },
    
    init() {
        this.updatePageText();
        
        // Создаем переключатель языков
        this.createLanguageSelector();
    },
    
    createLanguageSelector() {
        // Проверяем, есть ли уже селектор
        if (document.getElementById('lang-selector')) return;
        
        const selector = document.createElement('div');
        selector.id = 'lang-selector';
        selector.style.cssText = 'margin-left: 15px;';
        selector.innerHTML = `
            <select id="lang-select" onchange="BrainikI18n.changeLanguage(this.value)" style="
                padding: 8px 15px;
                border: 2px solid rgba(255,255,255,0.3);
                border-radius: 20px;
                background: rgba(255,255,255,0.2);
                color: white;
                font-size: 14px;
                cursor: pointer;
                outline: none;
            ">
                <option value="ru" ${this.currentLang === 'ru' ? 'selected' : ''}>🇷🇺 </option>
                <option value="en" ${this.currentLang === 'en' ? 'selected' : ''}>en </option>
                <option value="hy" ${this.currentLang === 'hy' ? 'selected' : ''}>🇦🇲 </option>
            </select>
        `;
        
        // Добавляем стиль для option (темный фон для выпадающего списка)
        const style = document.createElement('style');
        style.textContent = `
            #lang-select option {
                background: #333;
                color: white;
                padding: 10px;
            }
        `;
        document.head.appendChild(style);
        
        // Добавляем в навигацию
        const nav = document.querySelector('.nav-container');
        if (nav) {
            nav.appendChild(selector);
        }
    },
    
    changeLanguage(lang) {
        this.setLanguage(lang);
        window.location.reload();
    }
};

// Экспорт
window.BrainikI18n = i18n;

// Автоинициализация
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});
