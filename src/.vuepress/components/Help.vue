<!--
    <template>
        <div class="theme-container help-page">
            <Navbar />
            <main class="page">
                <div class="theme-custom-content content__default">
                    <slot name="top" />

                    <Content class="theme-custom-content" />

                    <Content slot-key="center" />

                    <div v-if="data.help && data.help.length" class="row help">
                        <div v-for="(helpItem, index) in data.help" :key="index" class="column helpItem">
                            <a v-if="helpItem.link" :href="helpItem.link" tabindex="1">
                                <div class="card" :class="'card__' + helpItem.title">
                                    <header v-if="helptItem.apps">
                                        <app-icon />
                                        <h3>{{ helpItem.title }}</h3>
                                    </header>
                                    <header v-else-if="helptItem.faqs">
                                        <trash-icon />
                                        <h3>{{ helpItem.title }}</h3>
                                    </header>
                                    <header v-else-if="helptItem.guides">
                                        <trash-icon />
                                        <h3>{{ helpItem.title }}</h3>
                                    </header>
                                    <header v-else-if="helptItem.contribution">
                                        <git-pull-request-icon />
                                        <h3>{{ helpItem.title }}</h3>
                                    </header>
                                    
                                    <header v-else-if="helpItem.icon">
                                        <bold-icon />
                                        <h3>{{ helpItem.title }}</h3>
                                    </header>
                                    <p>{{ helpItem.description }}</p>
                                </div>
                            </a>
                            <a  
                                v-else-if="helpItem.linkExt"
                                :href="helpItem.linkExt"
                                target="_blank"
                                rel="noreferrer"
                                tabindex="1"
                            >
                                <div class="card" :class="'card__' + helpItem.title">
                                    <header v-else-if="helptItem.contribution">
                                        <cloud-download-icon />
                                        <h3>{{ helpItem.title }}</h3>
                                    </header>
                                    <header v-if="helpItem.telegram">
                                        <brand-telegram-icon />
                                        <span>
                                            <h3>{{ helpItem.title }}</h3>
                                            <OutboundLink />
                                        </span>
                                    </header>
                                    <header v-else-if="helpItem.gitlab">
                                        <brand-gitlab-icon />
                                        <span>
                                            <h3>{{ helpItem.title }}</h3>
                                            <OutboundLink />
                                        </span>
                                    </header>
                                    <header v-else-if="helpItem.bugs">
                                        <bug-icon />
                                        <span>
                                            <h3>{{ helpItem.title }}</h3>
                                            <OutboundLink />
                                        </span>
                                    </header>
                                    
                                    <header v-else-if="helpItem.icon">
                                        <bold-icon />
                                        <h3>{{ helpItem.title }}</h3>
                                    </header>
                                    <p>{{ helpItem.description }}</p>
                                </div>
                            </a>
                        </div>

                        <slot name="bottom" />
                    </div>
                </div>
            </main>
        </div>
    </template>

    <script>
        import Vue from 'vue';

        export default {
            components: {

            }
        }
    </script>
-->
