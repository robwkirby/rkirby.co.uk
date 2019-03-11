<template>
    <section class="container">
        <section class="error-msg">
            <div class="row">
                <div class="col-12">
                    <header class="error-msg__header">
                        <h1 class="error-msg__title">There’s nothing here...</h1>
                    </header>
                    <p>The page you're looking for doesn't exist. Maybe it’s been moved, or maybe it never existed at all.</p>
                    <a href="/" class="btn">Go Home</a>
                </div>
            </div>
        </section>
    </section>
</template>

<style lang="scss">
    .error-msg {
        text-align: center;
        &__header {
            margin-top: 200px;
        }
        &__title {
            margin: 0;
        }
        p {
            margin-bottom: 40px;
        }
        .btn {
            max-width: 300px;
            margin: 0 auto;
        }
    }
</style>
